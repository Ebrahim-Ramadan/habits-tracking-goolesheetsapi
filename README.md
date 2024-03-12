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
  ]
}
```
