function getSheetData() {
  // 取得目前的試算表，也就是你的表單所關聯的試算表
  const spreadsheet = SpreadsheetApp.getActiveSheet();
  // 設定要取得的試算表資料範圍，這邊我們取得的範圍是 B2 到 F
  const getRange = spreadsheet.getRange('B2:H');
  // 將取得的資料轉換成二維陣列（你可以想像成一種資料格式）
  const displayDataValues =  getRange.getValues();
  
  // 資料暫存處
  const data = [];

  // 使用迴圈逐一處理每一列的資料
  for (let i = 0; i < displayDataValues.length; i++) {
    // 檢查該列的第一個值是否存在，如果存在表示有資料
    if (displayDataValues[i][0]) {
      // 將資料整理成物件的格式，以便後續使用
      data.push({
        email: displayDataValues[i][0], // 預約者 Email
        name: displayDataValues[i][1], // 預約者姓名
        startTime: displayDataValues[i][5], // 預約開始時間
        endTime: displayDataValues[i][6], // 預約結束時間
      });
    }
  }
  // 將資料印出來，讓你可以在「執行紀錄」看到結果
  Logger.log(data);
  // 回傳取得的資料（先不用管這個）
  return data
}