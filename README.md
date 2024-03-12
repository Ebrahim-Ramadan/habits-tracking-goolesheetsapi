# habits-tracking-goolesheetsapi
google sheets api for habits tracking, [visit](Google Sheets API for developers) for doc

notes:
- json representaion of the resource that represents a spreadsheet.
  ```
  {
  "spreadsheetId": string,
  "properties": {
    object (SpreadsheetProperties)
  },
  "sheets": [
    {
      object (Sheet)
    }
  ],
  "namedRanges": [
    {
      object (NamedRange)
    }
  ],
  "spreadsheetUrl": string,
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ],
  "dataSources": [
    {
      object (DataSource)
    }
  ],
  "dataSourceSchedules": [
    {
      object (DataSourceRefreshSchedule)
    }
  ]}
```
+ HTTP request
POST https://sheets.googleapis.com/v4/spreadsheets

The URL uses gRPC Transcoding syntax.

Request body
The request body contains an instance of Spreadsheet.

Response body
If successful, the response body contains a newly created instance of Spreadsheet.

Authorization scopes
Requires one of the following OAuth scopes:

https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/spreadsheets
