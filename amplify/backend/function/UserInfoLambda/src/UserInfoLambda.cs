using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Net;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace UserInfoLambda
{
    public class UserInfoLambda
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

                            // Використовуйте параметризований SQL-запит для безпечного виклику
                            var sqlQuery = "SELECT * FROM [User]";
                            var sqlCommand = new MySqlCommand(sqlQuery, connection);

                            using (var reader = await sqlCommand.ExecuteReaderAsync())
                            {
                                var users = new List<User>();

                                while (await reader.ReadAsync())
                                {
                                    var user = new User
                                    {
                                        Id = reader.GetInt32(0),
                                        Email = reader.GetString(1),
                                        Password = reader.GetString(2),
                                        UserName = reader.GetString(3),
                                        Phone = reader.GetString(4),
                                        ContactInform = reader.GetString(5)
                                    };

                                    users.Add(user);
                                }

                                response.StatusCode = (int)HttpStatusCode.OK;
                                response.Body = Newtonsoft.Json.JsonConvert.SerializeObject(users);
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

        private class User
        {
            public int Id { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public string UserName { get; set; }
            public string Phone { get; set; }
            public string ContactInform { get; set; }
        }
    }
}