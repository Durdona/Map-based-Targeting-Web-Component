import Vue from "vue";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { storiesOf } from "@storybook/vue";
import TargetingV2 from "../components/TargetingV2.vue";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen";

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
Vue.config.productionTip = false;

storiesOf("TargetingV2/TargetingV2", module).add("targeting", () => ({
	name: "member-targeting",
	components: { TargetingV2 },
	template: `<TargetingV2></TargetingV2>`
}));
