"use server";
import { google } from "googleapis";

export async function getSheetData(index: number) {
  const glAuth = await google.auth.getClient({
    credentials: {
      type: "service_account",
      project_id: "imposing-pager-425214-s6",
      private_key_id: "76318645a263f30868794511ef532f14b541872c",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGlLP7Wu6VXVVh\no3/IW4yhaUshyOX1SIDFEch2F0Li49yKPCs1wE4t3xlssdAW4nfMygy6aNMhNGo6\nj1ykRFcdtsl6sox1lVYqhjnfUfE4Ylr7XaqUP8H4Mdv2Uiubyr1YYOlNuom3deNE\nLxdzaUKOiAX0avmD+WJsQ+W9WGqCg7o+KfSZMYhK08RqRg/uit63nDWpSfa7TcEb\nybkdB4RUj/t1pW5NWqYLpkIEkozQvWbdjX5Km50usjpBeYNvHP7dcOOB9KLJskKh\nQ+5vWClT/JgBu+NQ1yn+cVQaMJRQVD3arxdMjTcHOOXPWmhJKfwGLiYzpOQx+XR+\ntgGreqz1AgMBAAECggEAGyUPlz/eVieMeMzPNlWhWx0YCpW6LXXMOGQOaWoTmA06\nw+CmrXHMngOdp5iEz+QEKUfDRqX2mlbeYIPhT4kR+XtXfkCy543S2fxAI/FBDoqP\nUkYC/8HZY3J5VWn1ERY9HLwemCP0GFJyjwr64ylT0kTwv3DyC6LG2/LKEEBqSs21\n4w5cE7e/XKHmYINMsCWHWFBRVB9FZcA1spD/7U94lgCfcoTwXXcaAQ6/lgL7nNSl\nNEwRoq3xxXHZeXKCsHMYxWPe3WM32mV+pjb4DgSn+ALQ2f/3LHDO3xViGM0mL4sK\n+sCymXwbAhSSL4OZBf2hvB76lt1rIebPESx4PmzWPwKBgQD7Jl7twWhBBn68HMTp\nL+3NFyFR8PDOouyIWoKa/Wzp7Bp0Ms+4w1NsrNWIHlgmsHInEQQo5IkdioMWapOT\njsayNYnQQvVcxKdfDJXsG6UmVdgLfNhh8dE8xOr+2fqsxBbn3uuJNwpdZNa832r3\nCxFCf0db0/0gI0iqttKQjYn7zwKBgQDKanFWI8LYsdfPqs0AS/z4ip1Vhs79dXpe\nyDOvn+n9p2u6aI8Dz+mMb9bsUItAdChinugfcJJdQMdA5JnVrE5SA6gkoJjK1rI+\niGrKRmtqE5+7CDrt6ASeFgLy3zdDIQsvGNly2H68QK3Zx1lYQAkLUbNnjBr8NvwW\nYT3b/rfn+wKBgBaeGAJ1Xnwsp5EtThZp+JJ1uMx2VFlnlsGY1RY8KGjQmHlKciaD\ngKnSztAZW3rwfPdDswozup1sce2831l0jDRUWfrlbM9T7nbC3WWL/816AaDXN21q\np5s/aKJW4xpX9nAfRTrwOAC9KhGMVUe2OXGxoK2GY89XHh4xpLjb5kdFAoGBAICx\nChvNIr1o3J/wpOOybESMxJky23kz7rhCKvJXBoq5nflnLr4quv8JwCiA0PgKof6J\nr2UFyli1rbkpXlEGeskUABxBasNTmwG888Bk4zgO//gGtIi7gewMbJWDq3vnj1fD\nQcUNtg30RVP3tWsxU066BAkqf6GpR77m1lB/cudvAoGAd5XcEB9dWftITq2s9RWN\nu87A7+G88hb6IqNEJSGxbJpTKzPwt/DHU+DUx9EiuYrrZcGh0ci3g4EfNBMSK6qH\ntmOEZx4gUXPJuNJV9W6t07vmfdWT16h8fxKj+nmtn3N3IKyv6xN3mME660XR49z7\nwzepqketbF/IP4FMtRGmWJE=\n-----END PRIVATE KEY-----\n",
      client_email: "stefruts@imposing-pager-425214-s6.iam.gserviceaccount.com",
      client_id: "115071432866332054510",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  const data = await glSheets.spreadsheets.values.get({
    spreadsheetId: "1qm1W88SdBvC2vHAy63184WMgAtSLjWQowHWXwB7H88c",
    range: `A${index}:C${index}`,
  });

  return { data: data.data.values };
}
