using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Net;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace advertisementLambda
{
    public class advertisementLambda
    {
    private const string connectionString = "Server=awsdata.csihpvbr1yo7.eu-central-1.rds.amazonaws.com;Database=awsdata;User Id=admin;Password=admin1234;";

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
                using (var connection = new SqlConnection(connectionString))
                {
                    await connection.OpenAsync();

                    switch (request.HttpMethod)
                    {
                        case "GET":
                            context.Logger.LogLine($"Get Request: {request.Path}\n");

                            // Використовуйте параметризований SQL-запит для безпечного виклику
                            var sqlQuery = "SELECT * FROM Advertisement";
                            var sqlCommand = new SqlCommand(sqlQuery, connection);

                            using (var reader = await sqlCommand.ExecuteReaderAsync())
                            {
                                var ads = new List<Advertisement>();

                                while (await reader.ReadAsync())
                                {
                                    var ad = new Advertisement
                                    {
                                        Id = reader.GetInt32(0),
                                        AdvertiserId = reader.GetInt32(1),
                                        AdCost = reader.GetDecimal(2),
                                        AdStatus = reader.GetString(3),
                                        AdStartDate = reader.GetDateTime(4),
                                        AdEndDate = reader.GetDateTime(5)
                                    };

                                    ads.Add(ad);
                                }

                                response.StatusCode = (int)HttpStatusCode.OK;
                                response.Body = Newtonsoft.Json.JsonConvert.SerializeObject(ads);
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

        private class Advertisement
        {
            public int Id { get; set; }
            public int AdvertiserId { get; set; }
            public decimal AdCost { get; set; }
            public string AdStatus { get; set; }
            public DateTime AdStartDate { get; set; }
            public DateTime AdEndDate { get; set; }
        }
    }
}