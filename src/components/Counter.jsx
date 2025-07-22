import Container from "react-bootstrap/Container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // % of component visible before triggering
  });
  return (
    <section className="counter_sec" ref={ref}>
      <Container>
        {inView && (
          <ul className="counter_list d-flex justify-content-between align-items-center">
            <li className="d-flex align-items-center">
              <CountUp start={-875.039} end={100} />

              <h6>
                daily
                <br /> order
              </h6>
            </li>
            <li className="d-flex align-items-center">
              <CountUp end={82} />
              <h6>
                Special
                <br /> Dishes
              </h6>
            </li>
            <li className="d-flex align-items-center">
              <CountUp end={35} />
              <h6>
                expert
                <br /> chef
              </h6>
            </li>
            <li className="d-flex align-items-center">
              <CountUp end={10} />
              <h6>
                awards
                <br /> won
              </h6>
            </li>
          </ul>
        )}
      </Container>
    </section>
  );
}
