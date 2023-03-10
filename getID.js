function getClassesID() {
  // URL DOC
  const urlDoc = ' ';

  // REGENTES
  const sheetName = 'ED_FÍSICA';

  const sheet = SpreadsheetApp.openByUrl(urlDoc).getSheetByName(sheetName);

  let infoClasses = Classroom.Courses.list().courses;

  infoClasses = infoClasses.filter(c => (c.courseState === 'ACTIVE' && c.name.startsWith('EDUCAÇÃO')));

  const classesData = infoClasses.map(c => {
    return [c.name,c.section,c.id];
  })

  Logger.log(classesData);

  sheet.getRange(2,1,classesData.length, classesData[0].length).setValues(classesData);

}
