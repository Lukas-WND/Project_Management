import * as XLSX from "xlsx";

export const generateExcelDocument = async (docName: string): Promise<string> => {
  const workbook = XLSX.utils.book_new();

  // Adiciona planilhas fictícias
  const sheets = ["Introdução", "Detalhes", "Conclusão"];
  sheets.forEach((sheet) => {
    const ws = XLSX.utils.aoa_to_sheet([[`${docName} - ${sheet}`]]);
    XLSX.utils.book_append_sheet(workbook, ws, sheet);
  });

  const fileName = `${docName.replace(/\s+/g, "_")}.xlsx`;
  const filePath = `/generated/${fileName}`;
  XLSX.writeFile(workbook, `public${filePath}`);
  return filePath;
};
