type MapProps = {
    mapClass: string;
  }

function Map({mapClass}: MapProps):JSX.Element {
  return (
    <section className={`${mapClass}__map map`}></section>
  );
}

export default Map;
