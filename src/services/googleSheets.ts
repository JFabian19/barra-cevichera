import Papa from 'papaparse';

// Coloca aquí tu ID de Google Sheets (lo encuentras en la URL de tu hoja de cálculo)
export const SHEET_ID = '1Nfxd6cbeMRzuP7mLueMsd1_sb8o_A7s_uQMEhbrG9Cg';

export interface SheetDish {
  Categoría: string;
  'Nombre del plato': string;
  Descripción: string;
  'Precio 1': string;
  'Precio 2'?: string;
  'Precio 3'?: string;
  'Imagen URL': string;
}

export interface SheetCategory {
  Nombre: string;
}

export const fetchSheetData = async <T>(sheetName: string): Promise<T[]> => {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  
  try {
    const response = await fetch(url);
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results.data as T[]),
        error: (error: any) => reject(error),
      });
    });
  } catch (error) {
    console.error(`Error fetching sheet ${sheetName}:`, error);
    return [];
  }
};

// Configura aquí la URL de tu Google Apps Script Web App para poder enviar datos
// Instrucciones: Crea un Apps Script, pega el código que te di, impleméntalo como Aplicación Web y pega la URL de ejecución aquí.
export const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyJqsqJ109fiN2hL6swZ9KNUA3ENgEx_z8DRr5E8vJ5jQhR7RdcqIDEsfF5Q_VI42NJ/exec';

export const submitSheetData = async (sheetName: string, data: any): Promise<boolean> => {
  if (!WEB_APP_URL) {
    console.warn('Falta configurar WEB_APP_URL. Simulando envío a:', sheetName, data);
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  try {
    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // Importante para evitar problemas de CORS con Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sheetName,
        data,
      }),
    });
    
    return true;
  } catch (error) {
    console.error(`Error submitting to sheet ${sheetName}:`, error);
    return false;
  }
};
