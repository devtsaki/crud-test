const palette = {
  red: {
    "100": "#ffcdd2",
    "200": "#ef9a9a",
    "300": "#e57373",
    "400": "#ef5350",
    "500": "#f44336",
    "600": "#e53935",
    "700": "#d32f2f",
    "800": "#c62828",
    "900": "#b71c1c",
  },
  purple: {
    "100": "#e1bee7",
    "200": "#ce93d8",
    "300": "#ba68c8",
    "400": "#ab47bc",
    "500": "#9c27b0",
    "600": "#8e24aa",
    "700": "#7b1fa2",
    "800": "#6a1b9a",
    "900": "#4a148c",
  },
  blue: {
    "100": "#bbdefb",
    "200": "#90caf9",
    "300": "#64b5f6",
    "400": "#42a5f5",
    "500": "#2196f3",
    "600": "#1e88e5",
    "700": "#1976d2",
    "800": "#1565c0",
    "900": "#0d47a1",
  },
  green: {
    "100": "#c8e6c9",
    "200": "#a5d6a7",
    "300": "#81c784",
    "400": "#66bb6a",
    "500": "#4caf50",
    "600": "#43a047",
    "700": "#388e3c",
    "800": "#2e7d32",
    "900": "#1b5e20",
  },
  orange: {
    "100": "#ffe0b2",
    "200": "#ffcc80",
    "300": "#ffb74d",
    "400": "#ffa726",
    "500": "#ff9800",
    "600": "#fb8c00",
    "700": "#f57c00",
    "800": "#ef6c00",
    "900": "#e65100",
  },
  grey: {
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
  },
  brand: {
    "400": "#70a2fe",
    "500": "#1f6dfd",
    "600": "#014bd1",
    "800": "#003598",
    "900": "#002e83",
  },
  white: "#ffffff",
};

const colors = {
  primary: palette.brand[600],
  primaryHover: palette.brand[800],
  primaryActive: palette.brand[900],
  secondaryHover: palette.grey[400],
  secondaryActive: palette.grey[600],
  dangerHover: palette.red[800],
  dangerActive: palette.red[900],
  warning: palette.orange[600],
  danger: palette.red[600],
  success: palette.green[600],
  white: palette.white,
  border: palette.grey[300],
  background: palette.grey[100],
  sidebarBackground: palette.grey[600],
  linkBackground: palette.blue[800],
  linkBackgroundHover: palette.blue[600],
};

export default colors;
