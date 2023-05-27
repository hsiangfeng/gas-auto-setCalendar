function setCalendar() {
  // 取得試算表資料，它會是一個陣列（一種資料格式）
  const sheetData = getSheetData();

  // 取得 Google 日曆
  const calendar = CalendarApp.getCalendarById(env.calendarId);

  // 使用迴圈逐一處理每一筆資料
  sheetData.forEach((data) => {
    // 檢查該事件是否已經存在
    const isExist = isEventExist(calendar, data.name, data.startTime, data.endTime);

    // 如果該事件不存在，則建立 Google 行事曆的事件，將 Google 試算表的資料寫入到 Google 行事曆中
    if (!isExist) {
      calendar.createEvent(data.name, data.startTime, data.endTime, {
        description: data.email, // 將預約者的 Email 寫入到 Google 行事曆的描述中
      });
    }
  });
}