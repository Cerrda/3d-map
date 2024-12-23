import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  Object3D,
  Shape,
  ExtrudeGeometry,
  Mesh,
  AmbientLight,
  Box3,
  Vector3,
  BufferGeometry,
  LineBasicMaterial,
  Line,
  MeshBasicMaterial,
  SpriteMaterial,
  TextureLoader,
  Sprite,
  DirectionalLight,
  Raycaster,
  Vector2,
  PlaneGeometry,
  MeshPhongMaterial,
  RepeatWrapping,
  Clock,
  MeshLambertMaterial,
  CatmullRomCurve3,
  TubeGeometry,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
import { geoMercator } from 'd3'
import { gsap } from 'gsap'
import { useDebounceFn } from '@vueuse/core'
import { getImgUrl } from '.'

// 地图深度
const depth = 1
// 地图坐标投影
let projection

const loader = new TextureLoader()
// 地名标记图标
const iconTexture = loader.load(getImgUrl('icon.png'))
// 场景光团背景
const lightBallTexture = loader.load(getImgUrl('light_ball.png'))
// 网格背景
const gridTexture = loader.load(getImgUrl('grid.png'))
// 网格不透明度
const gridOpacityTexture = loader.load(getImgUrl('grid_opacity.jpg'))
// 内小圆环
const insideRotatingTexture = loader.load(getImgUrl('inset_rotating_texture.png'))
// 外大圆环
const outsideRotatingTexture = loader.load(getImgUrl('outset_rotating_texture.png'))
// 最外层光圈
const quanTexture = loader.load(getImgUrl('quan.png'))
// 地图顶部法线贴图
const topNormalTexture = loader.load(getImgUrl('top_surface_normal_map.jpg'))
// 侧边
const sideTexture = loader.load(getImgUrl('side.png'))

/**
 * 初始化
 * @param {HTMLDivElement} mapRef 地图容器
 * @param {Array} center 地图中心点坐标
 * @returns
 */
export const init = (mapRef) => {
  // 地图坐标投影
  projection = geoMercator()
  // 场景
  const scene = new Scene()
  // 相机
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, -9, 9)
  // 光
  const directionalLight1 = new DirectionalLight(0xffffff, 2)
  directionalLight1.position.set(15, 30, 15)
  const ambientLight = new AmbientLight(0xffffff, 3)
  scene.add(directionalLight1)
  scene.add(ambientLight)
  // 渲染器
  const renderer = new WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  mapRef.appendChild(renderer.domElement)
  const css2dRenderer = new CSS2DRenderer()
  css2dRenderer.domElement.style.position = 'absolute'
  css2dRenderer.domElement.style.top = '0px'
  css2dRenderer.domElement.style.pointerEvents = 'none'
  css2dRenderer.setSize(window.innerWidth, window.innerHeight)
  mapRef.appendChild(css2dRenderer.domElement)
  // 控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  // 坐标轴辅助系
  // const axesHelper = new AxesHelper(10)
  // scene.add(axesHelper)
  // 时钟
  const clock = new Clock()
  // 场景光团背景
  const planeGeometry = new PlaneGeometry(20, 20)
  const lightBallMaterial = new MeshBasicMaterial({
    color: 0x97cfe2,
    map: lightBallTexture,
    transparent: true,
  })
  const mesh = new Mesh(planeGeometry, lightBallMaterial)
  mesh.position.z = -depth / 2 - 0.9
  mesh.scale.set(1.3, 1.3, 1.3)
  scene.add(mesh)
  // 网格
  gridTexture.repeat.set(20, 20)
  gridTexture.wrapS = RepeatWrapping
  gridTexture.wrapT = RepeatWrapping
  const gridMaterial = new MeshPhongMaterial({
    color: 0x021c34,
    map: gridTexture,
    transparent: true,
    alphaMap: gridOpacityTexture,
  })
  const gridMesh = new Mesh(planeGeometry, gridMaterial)
  gridMesh.position.z = -depth / 2 - 1
  gridMesh.scale.set(2, 2, 2)
  scene.add(gridMesh)
  // 旋转的内环
  const insideMaterial = new MeshBasicMaterial({
    color: 0x19699f,
    map: insideRotatingTexture,
    transparent: true,
  })
  const insideMesh = new Mesh(planeGeometry, insideMaterial)
  insideMesh.scale.set(0.9, 0.9, 0.9)
  insideMesh.position.z = -depth / 2 - 0.7
  scene.add(insideMesh)
  // 旋转的外环
  const outSideMaterial = new MeshBasicMaterial({
    color: 0x0a365e,
    map: outsideRotatingTexture,
    transparent: true,
  })
  const outSideMesh = new Mesh(planeGeometry, outSideMaterial)
  outSideMesh.position.z = -depth / 2 - 0.8
  scene.add(outSideMesh)
  // 最外面的圈
  const quanMaterial = new MeshBasicMaterial({
    color: 0x19699f,
    map: quanTexture,
    transparent: true,
  })
  quanMaterial.depthWrite = false
  const quanMesh = new Mesh(planeGeometry, quanMaterial)
  quanMesh.scale.set(1.5, 1.5, 1.5)
  quanMesh.position.z = depth * 2
  scene.add(quanMesh)
  // 渲染
  const render = () => {
    const elapsedTime = clock.getElapsedTime()
    controls.update()
    renderer.render(scene, camera)
    css2dRenderer.render(scene, camera)
    insideMesh.rotation.z = -elapsedTime * 0.4
    outSideMesh.rotation.z = elapsedTime * 0.05

    renderer.setAnimationLoop(render)
  }
  render()
  // 窗口大小变化监听
  window.addEventListener(
    'resize',
    useDebounceFn(() => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      css2dRenderer.setSize(window.innerWidth, window.innerHeight)
    }, 400),
  )

  return { scene, camera, Object3D, Raycaster, Vector2 }
}
/**
 * 创建地图每一个板块
 * @param {Array} data 数据
 * @returns {THREE.Mesh} 地图板块
 */
export const createMesh = (data) => {
  const shape = new Shape()
  data.forEach((item, idx) => {
    const [x, y] = projection(item)

    if (idx === 0) shape.moveTo(x, -y)
    else shape.lineTo(x, -y)
  })

  const geometry = new ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
  })
  topNormalTexture.wrapS = RepeatWrapping
  topNormalTexture.wrapT = RepeatWrapping
  topNormalTexture.repeat.set(0.05, 0.05)

  const material = new MeshPhongMaterial({
    color: 0x0e1b3a,
    normalMap: topNormalTexture,
  })
  const sideMaterial = new MeshLambertMaterial({
    color: 0x2bc4dc,
    map: sideTexture,
  })
  const mesh = new Mesh(geometry, [material, sideMaterial])

  return mesh
}
/**
 * 每一个板块的边界线
 * @param {Array} data 数据
 * @returns {THREE.Line} 边界线
 */
export const createLine = (data) => {
  const points = []

  data.forEach((item) => {
    const [x, y] = projection(item)
    points.push(new Vector3(x, -y, 0))
  })

  const lineGeometry = new BufferGeometry().setFromPoints(points)
  const uplineMaterial = new LineBasicMaterial({
    color: 0x2bc4dc,
    linewidth: 1,
  })

  const upLine = new Line(lineGeometry, uplineMaterial)
  upLine.position.z = depth + 0.0001

  return upLine
}
/**
 * 创建地名标记
 * @param {String} name 地名
 * @param {Array} point 坐标
 * @returns {THREE.CSS2DObject} 地名标记
 */
export const createLabel = (name, point) => {
  const div = document.createElement('div')
  div.classList.add('map-city-name')
  div.textContent = name
  const label = new CSS2DObject(div)
  const [x, y] = projection(point)
  label.position.set(x, -y - 0.2, depth)
  return label
}
/**
 * 创建地名标记图标
 * @param {Array} point 坐标
 * @returns {THREE.Sprite} 地名标记图标
 */
export const createIcon = (point) => {
  const material = new SpriteMaterial({
    map: iconTexture,
    transparent: true,
    depthTest: false,
  })
  const sprite = new Sprite(material)
  const [x, y] = projection(point)
  sprite.scale.set(0.3, 0.3, 0.3)
  sprite.position.set(x, -y + 0.2, depth + 0.2)

  return sprite
}
/**
 * 设置地图中心
 * @param {THREE.Object3D} map 地图
 */
export const setCenter = (map) => {
  const box = new Box3().setFromObject(map)
  const center = box.getCenter(new Vector3())

  const offset = [0, 0, 0]

  map.position.x = map.position.x - center.x - offset[0]
  map.position.y = map.position.y - center.y - offset[1]
  map.position.z = map.position.z - center.z - offset[2]
}
/**
 * 地图板块向上移动
 * @param {THREE.Object3D} plate 地图板块
 * @param {Number} z 移动距离
 */
export const plateMove = (plate, z) => {
  plate.children.forEach((item) => {
    if (item.type === 'Line') {
      gsap.to(item.position, { z: z + depth + 0.0001, duration: 0.4, ease: 'power1.out' })
    } else {
      gsap.to(item.position, { z, duration: 0.4, ease: 'power1.out' })
    }
  })
}
export const createFlyLine = () => {
  const [sx, sy] = projection([118.123854, 24.676398])
  const [ex, ey] = projection([118.894712, 25.445304])
  const linePoints = [
    new Vector3(sx, -sy, depth),
    new Vector3((sx + ex) / 2, -(sy + ey) / 2, depth + 1),
    new Vector3(ex, -ey, depth),
  ]
  const lineCurve = new CatmullRomCurve3(linePoints)
  const geometry = new TubeGeometry(lineCurve, 64, 0.02, 8, false)
  const material = new MeshBasicMaterial({ color: 0x2bc4dc })
  const mesh = new Mesh(geometry, material)
  return mesh
}
export const createPlate = (coordinate, plate, meshArr, plateArr, name) => {
  plate.name = name
  const mesh = createMesh(coordinate)
  const line = createLine(coordinate)
  plate.add(mesh, line)
  meshArr.push(mesh)
  plateArr.push(plate)
}
