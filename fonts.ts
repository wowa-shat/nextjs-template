import localFont from "next/font/local";

// Load custom fonts
export const drukTrial = localFont({
  src: [
    {
      path: './public/fonts/druk-trial-cufonfonts/Druk-Medium-Trial.otf'
    }
  ],
  variable: '--font-druk',
  display: 'swap',
});

export const helvetica_regular = localFont({
  src: [
    {
      path: './public/fonts/Helvetica/helvetica_regular.otf'
    }
  ],
  variable: '--font-helvetica-regular',
  display: 'swap',
});

export const helvetica_bold = localFont({
  src: [
    {
      path: './public/fonts/Helvetica/helvetica_bold.otf'
    }
  ],
  variable: '--font-helvetica-bold',
  display: 'swap',
});

export const helvetica_oblique = localFont({
  src: [
    {
      path: './public/fonts/Helvetica/helvetica_oblique.otf'
    }
  ],
  variable: '--font-helvetica-oblique',
  display: 'swap',
});

export const helvetica_lightoblique = localFont({
  src: [
    {
      path: './public/fonts/Helvetica/helvetica_lightoblique.otf'
    }
  ],
  variable: '--font-helvetica-lightoblique',
  display: 'swap',
});

export const helvetica_boldoblique = localFont({
  src: [
    {
      path: './public/fonts/Helvetica/helvetica_boldoblique.otf'
    }
  ],
  variable: '--font-helvetica-boldoblique',
  display: 'swap',
});