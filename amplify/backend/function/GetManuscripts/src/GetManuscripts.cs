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
