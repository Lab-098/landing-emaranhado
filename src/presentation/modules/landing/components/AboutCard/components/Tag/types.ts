interface IStyledTagProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface ITagProps extends IStyledTagProps {
  text: string;
}

export type { ITagProps, IStyledTagProps };
