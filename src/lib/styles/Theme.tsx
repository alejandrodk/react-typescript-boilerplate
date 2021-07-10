import { Palette, TypeSizes, Fonts, Margin, Padding } from '@styles';

export const Theme = {
  colors: {
    primary: Palette.RED_BRAND,
    background: Palette.GRAY_SOFT,
    base: Palette.WHITE,
    text_primary: Palette.GRAY_DARK,
    text_medium: Palette.GRAY_MEDIUM,
    text_soft: Palette.GRAY_REGULAR,
    text_base: Palette.WHITE,
  },
  text: {
    l: {
      ...Fonts.TITLE_BOLD,
      ...TypeSizes.LARGE,
      fontWeight: 'bold',
    },
    m: {
      ...Fonts.TITLE_MEDIUM,
      ...TypeSizes.MEDIUM,
      fontWeight: 'bold',
    },
    s: {
      ...Fonts.TEXT,
      ...TypeSizes.SMALL,
      fontWeight: 'normal',
    },
  },
  margin: {
    l: {
      ...Margin.LARGE,
    },
    m: {
      ...Margin.MEDIUM,
    },
    s: {
      ...Margin.SMALL,
    },
    xs: {
      ...Margin.TINY,
    },
  },
  padding: {
    l: {
      ...Padding.LARGE,
    },
    m: {
      ...Padding.MEDIUM,
    },
    s: {
      ...Padding.SMALL,
    },
    xs: {
      ...Padding.TINY,
    },
  },
  border: {
    l: {
      borderRadius: 20,
    },
    m: {
      borderRadius: 15,
    },
    s: {
      borderRadius: 10,
    },
    xs: {
      borderRadius: 5,
    },
  },
};

export const DarkTheme = {
  ...Theme,
};
