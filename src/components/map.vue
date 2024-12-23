<script setup>
import { createIcon, createLabel, init, plateMove, setCenter, createFlyLine, createPlate } from '@/utils/three'

const props = defineProps({
  mapJson: {
    type: Object,
    required: true,
  },
})
const mapRef = ref(null)
const tooltip = ref(null)
const tooltipConfig = ref({ x: 0, y: 0, show: true, content: '' })

onMounted(() => {
  const { scene, camera, Object3D, Raycaster, Vector2 } = init(mapRef.value)

  // 地图
  const map = new Object3D()
  // 板块中的每一块
  const meshArr = []
  // 板块（块和线条）
  const plateArr = []
  // 画出每一个板块添加到map
  props.mapJson.features.forEach((feature) => {
    // 每一个板块
    const plate = new Object3D()

    const { centroid, center, name } = feature.properties
    const { coordinates, type } = feature.geometry
    // 板块的中心点（有质心用质心，没有质心用中心点）
    const point = centroid || center
    // 市名
    const label = point && createLabel(name, point)
    label && map.add(label)
    // 图标
    const icon = point && createIcon(point)
    icon && map.add(icon)

    coordinates.forEach((coordinate) => {
      if (type === 'MultiPolygon') coordinate.forEach((item) => createPlate(item, plate, meshArr, plateArr, name))
      if (type === 'Polygon') createPlate(coordinate, plate, meshArr, plateArr, name)
    })

    map.add(plate)
  })
  // 飞线
  const flyLine = createFlyLine()
  map.add(flyLine)
  setCenter(map)
  scene.add(map)

  // 鼠标悬浮监听
  const raycaster = new Raycaster()
  let lastPlate = '' // 上一个悬浮的板块
  let curPlate = '' // 当前悬浮的板块
  mapRef.value.addEventListener('mousemove', (event) => {
    const mouse = new Vector2()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(meshArr)

    if (intersects.length <= 0) {
      document.body.style.cursor = 'default'
      plateArr.forEach((plate) => plateMove(plate, 0))
      lastPlate = ''
      tooltipConfig.value.show = false
      return
    }

    tooltipConfig.value = { x: event.x + 20, y: event.y + 20, show: true, content: `${curPlate}` }
    document.body.style.cursor = 'pointer'
    curPlate = intersects[0].object.parent.name
    if (lastPlate === curPlate) return

    plateArr.forEach((plate) => {
      if (plate.name === curPlate) {
        plateMove(plate, 0.5)
      } else {
        plateMove(plate, 0)
      }
    })
    lastPlate = curPlate
  })
})
</script>

<template>
  <div relative overflow-hidden>
    <div ref="mapRef"></div>
    <div
      ref="tooltip"
      v-show="tooltipConfig.show"
      v-html="tooltipConfig.content"
      :style="{ transform: `translate(${tooltipConfig.x}px, ${tooltipConfig.y}px)` }"
      bg="#19699F99"
      text="#fff"
      pointer-events-none
      absolute
      left-0
      top-0
      border-rd-4
      px-10
      py-10
      transition-transform
      transition-duration-100
      transition-ease-linear
    ></div>
  </div>
</template>
