type ISetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IAppContext {
  testState: any;
  setTestState: ISetState<any>;
  setDarkMode: ISetState<boolean>;
  theme: IAppTheme;
}

export interface IAppTheme {
  colors: {
    primary: string;
    background: string;
    text_primary: string;
    text_medium: string;
    text_soft: string;
    text_base: string;
    base: string;
  };
  text: {
    l: any;
    m: any;
    s: any;
  };
  margin: {
    l: any;
    m: any;
    s: any;
    xs: any;
  };
  padding: {
    l: any;
    m: any;
    s: any;
    xs: any;
  };
  border: {
    l: any;
    m: any;
    s: any;
    xs: any;
  };
}