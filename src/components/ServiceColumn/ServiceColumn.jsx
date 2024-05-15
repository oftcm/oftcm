export const ServiceColumn = ({ title, description }) => {
  return (
    <div className="col medium-4 small-12 large-4">
      <div className="col-inner">
        <div className="icon-box featured-box icon-box-center text-center is-large" style={{ margin: '0px' }}>
          <div className="icon-box-text last-reset">
            <h5 className="uppercase">{title}</h5>
            <p>
              <span style={{ fontSize: 'medium' }}>{description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};