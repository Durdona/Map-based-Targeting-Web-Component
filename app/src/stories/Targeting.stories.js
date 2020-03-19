import "bulma/css/bulma.css";
// import '@fortawesome/fontawesome-free/css/all.css';
import { storiesOf } from "@storybook/vue";
import Targeting from "../components/Targeting.vue";

storiesOf("Targeting/Targeting", module).add("targeting", () => ({
	name: "member-targeting",
	components: { Targeting },
	template: `<Targeting></Targeting>`
}));
