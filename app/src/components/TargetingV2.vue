<template>
  <div class="section is-desktop">
    <div class="container">
      <div class="tabs is-toggle">
        <ul>
          <li>
            <a @click="activetab = 1" :class="[activetab === 1 ? 'active' : '']">
              <span>Radial Search</span>
            </a>
          </li>
          <li>
            <a @click="activetab = 2" :class="[activetab === 2 ? 'active' : '']">
              <span>GeoJSON Search</span>
            </a>
          </li>
        </ul>
      </div>

      <fieldset class="fieldset box">
        <legend class="label"></legend>
        <div v-if="activetab === 1" class="radial-search-tab">
          <div class="columns is-desktop radial-first-row">
            <div class="field column is-8">
              <p class="control has-icons-left">
                <input
                  id="searchString"
                  class="input search-city"
                  type="text"
                  placeholder="Please enter street address or zip code"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-globe-americas"></i>
                </span>
              </p>
            </div>
            <div class="field column is-3">
              <p class="control">
                <input id="searchRadius" class="input" type="number" placeholder="Miles" min="0" />
              </p>
            </div>
            <div class="column">
              <p class="control">
                <a class="button is-primary is-fullwidth">Submit</a>
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberTargetingVersion2",
  data() {
    return {
      activetab: 1
    };
  },
  components: {},
  methods: {}
};
</script>

<style>
/* active tab style */
.tabs.is-toggle li a.active {
  background-color: #3273dc;
  border-color: #3273dc;
  color: #fff;
  z-index: 1;
}
.tabs:not(:last-child) {
  margin-bottom: 0;
}
</style>