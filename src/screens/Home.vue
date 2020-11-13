<template lang="pug">
div
  SheetWidget
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { FeatureWidgets } from '@/router/featureWidgetsRouter'
const { SheetWidget } = FeatureWidgets.widgets

@Options({
  components: { SheetWidget },
})
export default class Home extends Vue {}
</script>
