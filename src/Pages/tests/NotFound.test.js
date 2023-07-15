import NotFound from "../NotFound";
import renderer from "react-test-renderer";
import { withRouter } from "../../tests/utils";
import { Route } from "react-router-dom";

describe("NotFound", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      withRouter(<Route path="/" element={<NotFound />} />)
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
