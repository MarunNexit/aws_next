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

                            var sqlQuery = @"
                                SELECT
                                    U.*,
                                    A.id AS author_id,
                                    E.id AS editor_id,
                                    M.id AS manager_id,
                                    Ad.id AS advertiser_id,
                                    E.department AS editor_department,
                                    M.department AS manager_department,
                                    Ad.company_name,
                                    Ad.website
                                FROM
                                    User U
                                LEFT JOIN Authors A ON U.id = A.user_id
                                LEFT JOIN Editors E ON U.id = E.user_id
                                LEFT JOIN Manager M ON U.id = M.user_id
                                LEFT JOIN Advertisers Ad ON U.id = Ad.user_id";

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
                                        ContactInform = reader.GetString(5),
                                        AuthorId = reader.IsDBNull(6) ? (int?)null : reader.GetInt32(6),
                                        EditorId = reader.IsDBNull(7) ? (int?)null : reader.GetInt32(7),
                                        ManagerId = reader.IsDBNull(8) ? (int?)null : reader.GetInt32(8),
                                        AdvertiserId = reader.IsDBNull(9) ? (int?)null : reader.GetInt32(9),
                                        EditorDepartment = reader.IsDBNull(10) ? null : reader.GetString(10),
                                        ManagerDepartment = reader.IsDBNull(11) ? null : reader.GetString(11),
                                        CompanyName = reader.IsDBNull(12) ? null : reader.GetString(12),
                                        Website = reader.IsDBNull(13) ? null : reader.GetString(13)
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
            public int? AuthorId { get; set; }
            public int? EditorId { get; set; }
            public int? ManagerId { get; set; }
            public int? AdvertiserId { get; set; }
            public string EditorDepartment { get; set; }
            public string ManagerDepartment { get; set; }
            public string CompanyName { get; set; }
            public string Website { get; set; }
        }
    }
}
