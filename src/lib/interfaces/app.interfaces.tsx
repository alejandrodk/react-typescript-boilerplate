type ISetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IAppContext {
  testState: any;
  setTestState: ISetState<any>
}