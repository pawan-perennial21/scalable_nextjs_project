interface LoaderProps {
  /** To define the render loader component */
  isLoading: boolean;
  // eslint-disable-next-line no-undef
  content?: JSX.Element | string;
  color?: string;
}
function Loader(props: LoaderProps) {
  const { isLoading, content, color } = props;
  if (!isLoading) {
    return null;
  }
  return (
    <div className="main-loader-wrapper">
      <div className="loader" id="mainLoader">
        <svg className="spinner" viewBox="25 25 50 50">
          <circle style={{ stroke: `${color}` }} cx="50" cy="50" r="20" />
        </svg>
        {content && <div className="loader-content">{content}</div>}
      </div>
    </div>
  );
}

export default Loader;

Loader.defaultProps = {
  content: '',
  color: '',
};
