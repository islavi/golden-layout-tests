export class Const {

    public static local = {
        serverURL: 'http://localhost:3000',
        userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWZlYmRjNmZlZjkwZjRhMDBkNzA1NmIiLCJlbWFpbCI6ImlzcmFlbC5sYXZpQGdtYWlsLmNvbSIsImxhc3ROYW1lIjoiTGF2aSA0IiwiZmlyc3ROYW1lIjoiTmV3IElzcmFlbCIsImlhdCI6MTUyNzc3NjQzMywiZXhwIjoyMTMyNTc2NDMzfQ.60tjKJyq2HdrHJ0akUJjw_YbxsBhJ9254qMWHF6SwEA'
    };

    public static aws = {
        serverURL: 'http://ec2-18-218-43-88.us-east-2.compute.amazonaws.com:3000',
        userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWZlZGQ4YzUyZjE5ODYxMTc4NzBkYzkiLCJlbWFpbCI6ImlzcmFlbC5sYXZpQGdtYWlsLmNvbSIsImxhc3ROYW1lIjoiTGF2aSIsImZpcnN0TmFtZSI6IklzcmFlbCIsImlhdCI6MTUyNjcxNzQ4MiwiZXhwIjoyMTMxNTE3NDgyfQ.hcg2SJwZoZub71xOk4yHVTnUIa20G345KXIkX_qhjz8'
    };

    public static serverURL: string = Const.local.serverURL;
    public static userToken: string = Const.local.userToken;
    public static userTokenPrefix = 'Bearer ';

    // Map start zoom level
    public static mapZoom = 6;

    // Map start lat
    public static mapLat = -0.777602;

    // Map start lng
    public static mapLng = -78.897155;

    // TODO: Verify backend and db are up, and maybe show in screen.

}
