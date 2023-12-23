using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Net;
using System.Threading.Tasks;
using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace GetManuscripts
{
    public class GetManuscripts
    {
        private const string connectionString = "Server=awsdata.csihpvbr1yo7.eu-central-1.rds.amazonaws.com;Database=aws_crm_database;User Id=admin;Password=admin1234;";

        public async Task<APIGatewayProxyResponse> LambdaHandler(APIGatewayProxyRequest request, ILambdaContext context)
        {
            var response = new APIGatewayProxyResponse
            {
                Headers = new Dictionary<string, string>
                {
                    { "Access-Control-Allow-Origin", "*" },
                    { "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" }
                }
            };

            try
            {
                using (var connection = new MySqlConnection(connectionString))
                {
                    await connection.OpenAsync();

                    switch (request.HttpMethod)
                    {
                        case "GET":
                            context.Logger.LogLine($"Get Request: {request.Path}\n");

                            var sqlQuery = @"
                                SELECT
                                    E.*,
                                    P.title AS printing_title,
                                    P.printing_quantity,
                                    P.printing_location,
                                    P.printing_date,
                                    P.advertising_space_available,
                                    P.selling_price,
                                    P.cover,
                                    P.ISBN,
                                    P.ISSN
                                FROM
                                    Edition E
                                LEFT JOIN Printings P ON E.print_edition_id = P.id";

                            var sqlCommand = new MySqlCommand(sqlQuery, connection);

                            using (var reader = await sqlCommand.ExecuteReaderAsync())
                            {
                                var editions = new List<Edition>();

                                while (await reader.ReadAsync())
                                {
                                    var edition = new Edition
                                    {
                                        Id = reader.GetInt32(0),
                                        AuthorId = reader.GetInt32(1),
                                        PrintEditionId = reader.IsDBNull(2) ? (int?)null : reader.GetInt32(2),
                                        EditionType = reader.GetString(3),
                                        EditionTitle = reader.GetString(4),
                                        EditionDescription = reader.GetString(5),
                                        LinkForFile = reader.GetString(6),
                                        NumberPages = reader.GetInt32(7),
                                        FormatPages = reader.GetString(8),
                                        Status = reader.GetString(9),
                                        DateAdding = reader.GetDateTime(10),
                                        PrintingTitle = reader.IsDBNull(11) ? null : reader.GetString(11),
                                        PrintingQuantity = reader.IsDBNull(12) ? (int?)null : reader.GetInt32(12),
                                        PrintingLocation = reader.IsDBNull(13) ? null : reader.GetString(13),
                                        PrintingDate = reader.IsDBNull(14) ? (DateTime?)null : reader.GetDateTime(14),
                                        AdvertisingSpaceAvailable = reader.IsDBNull(15) ? (bool?)null : reader.GetBoolean(15),
                                        SellingPrice = reader.IsDBNull(16) ? (decimal?)null : reader.GetDecimal(16),
                                        Cover = reader.IsDBNull(17) ? null : reader.GetString(17),
                                        ISBN = reader.IsDBNull(18) ? null : reader.GetString(18),
                                        ISSN = reader.IsDBNull(19) ? null : reader.GetString(19),
                                    };

                                    editions.Add(edition);
                                }

                                response.StatusCode = (int)HttpStatusCode.OK;
                                response.Body = Newtonsoft.Json.JsonConvert.SerializeObject(editions);
                                response.Headers["Content-Type"] = "application/json";
                            }
                            break;


                        case "POST":
                            context.Logger.LogLine($"Post Request: {request.Path}\n");

                            if (request.Body == null)
                            {
                                // Handle the case where the request body is null
                                response.StatusCode = (int)HttpStatusCode.BadRequest;
                                response.Body = "Request body is null.";
                                return response;
                            }
                            // Parse the request body to get the data for the new record
                            var requestBody = request.Body;
                            var newEdition = Newtonsoft.Json.JsonConvert.DeserializeObject<Edition>(requestBody);

                            using (var transaction = await connection.BeginTransactionAsync())
                            {
                                try
                                {
                                    // Add the new record to the Edition table
                                    var insertEditionQuery = @"
                                        INSERT INTO Edition (author_id, edition_type, edition_title, edition_description, link_for_file, number_pages, format_pages, status, date_adding)
                                        VALUES (@AuthorId, @EditionType, @EditionTitle, @EditionDescription, @LinkForFile, @NumberPages, @FormatPages, @Status, @DateAdding);
                                        SELECT LAST_INSERT_ID();";

                                    var insertEditionCommand = new MySqlCommand(insertEditionQuery, connection, transaction);
                                    insertEditionCommand.Parameters.AddWithValue("@AuthorId", newEdition.AuthorId);
                                    insertEditionCommand.Parameters.AddWithValue("@EditionType", newEdition.EditionType);
                                    insertEditionCommand.Parameters.AddWithValue("@EditionTitle", newEdition.EditionTitle);
                                    insertEditionCommand.Parameters.AddWithValue("@EditionDescription", newEdition.EditionDescription);
                                    insertEditionCommand.Parameters.AddWithValue("@LinkForFile", newEdition.LinkForFile);
                                    insertEditionCommand.Parameters.AddWithValue("@NumberPages", newEdition.NumberPages);
                                    insertEditionCommand.Parameters.AddWithValue("@FormatPages", newEdition.FormatPages);
                                    insertEditionCommand.Parameters.AddWithValue("@Status", newEdition.Status);
                                    insertEditionCommand.Parameters.AddWithValue("@DateAdding", DateTime.Now);

                                    var newEditionId = await insertEditionCommand.ExecuteScalarAsync();

                                    if(newEdition.Status == "Published") {
                                        var insertPrintingsQuery = @"
                                            INSERT INTO Printings (title, printing_quantity, printing_location, printing_date, advertising_space_available, selling_price, cover, ISBN, ISSN, print_edition_id)
                                            VALUES (@Title, @PrintingQuantity, @PrintingLocation, @PrintingDate, @AdvertisingSpaceAvailable, @SellingPrice, @Cover, @ISBN, @ISSN, @PrintEditionId);";

                                        var insertPrintingsCommand = new MySqlCommand(insertPrintingsQuery, connection, transaction);
                                        insertPrintingsCommand.Parameters.AddWithValue("@Title", newEdition.PrintingTitle);
                                        insertPrintingsCommand.Parameters.AddWithValue("@PrintingQuantity", newEdition.PrintingQuantity);
                                        insertPrintingsCommand.Parameters.AddWithValue("@PrintingLocation", newEdition.PrintingLocation);
                                        insertPrintingsCommand.Parameters.AddWithValue("@PrintingDate", newEdition.PrintingDate);
                                        insertPrintingsCommand.Parameters.AddWithValue("@AdvertisingSpaceAvailable", newEdition.AdvertisingSpaceAvailable);
                                        insertPrintingsCommand.Parameters.AddWithValue("@SellingPrice", newEdition.SellingPrice);
                                        insertPrintingsCommand.Parameters.AddWithValue("@Cover", newEdition.Cover);
                                        insertPrintingsCommand.Parameters.AddWithValue("@ISBN", newEdition.ISBN);
                                        insertPrintingsCommand.Parameters.AddWithValue("@ISSN", newEdition.ISSN);
                                        insertPrintingsCommand.Parameters.AddWithValue("@PrintEditionId", newEditionId);

                                        await insertPrintingsCommand.ExecuteNonQueryAsync();
                                    }


                                    // Commit the transaction
                                    transaction.Commit();

                                    response.StatusCode = (int)HttpStatusCode.Created;
                                    response.Body = $"{{ \"newEditionId\": {newEditionId} }}";
                                    response.Headers["Content-Type"] = "application/json";
                                }
                                catch (Exception ex)
                                {
                                    try
                                    {
                                        // Rollback the transaction in case of an error
                                        if (transaction.Connection != null)
                                        {
                                            transaction.Rollback();
                                        }
                                    }
                                    catch (Exception rollbackEx)
                                    {
                                        context.Logger.LogLine($"Rollback error: {rollbackEx.Message}\n");
                                    }

                                    context.Logger.LogLine($"Error: {ex.Message}\n");
                                    response.StatusCode = (int)HttpStatusCode.InternalServerError;
                                    response.Body = $"{{ \"error\": \"{ex.Message}\" }}";
                                }
                            }
                            break;


                        default:
                            context.Logger.LogLine($"Unsupported HTTP method {request.HttpMethod}\n");
                            response.StatusCode = (int)HttpStatusCode.BadRequest;
                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                context.Logger.LogLine($"Error: {ex.Message}\n");
                response.StatusCode = (int)HttpStatusCode.InternalServerError;
                response.Body = $"{{ \"error\": \"{ex.Message}\" }}";
            }

            return response;
        }

        private class Edition
        {
            public int Id { get; set; }
            public int AuthorId { get; set; }
            public int? PrintEditionId { get; set; }
            public string EditionType { get; set; }
            public string EditionTitle { get; set; }
            public string EditionDescription { get; set; }
            public string LinkForFile { get; set; }
            public int NumberPages { get; set; }
            public string FormatPages { get; set; }
            public string Status { get; set; }
            public DateTime DateAdding { get; set; }
            public string PrintingTitle { get; set; }
            public int? PrintingQuantity { get; set; }
            public string PrintingLocation { get; set; }
            public DateTime? PrintingDate { get; set; }
            public bool? AdvertisingSpaceAvailable { get; set; }
            public decimal? SellingPrice { get; set; }
            public string Cover { get; set; }
            public string ISBN { get; set; }
            public string ISSN { get; set; }
        }
    }
}
