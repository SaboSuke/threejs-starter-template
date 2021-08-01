import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js'
import Shaders from './shaders.js'

export default class Animate extends Shaders{
    constructor() {
        super()
        this.initVars()

        this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
        this.camera.position.x = 0
        this.camera.position.y = 0
        this.camera.position.z = 2
        this.scene = new THREE.Scene()
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.querySelector('.container').appendChild(this.renderer.domElement)
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        
        this.mouse = new THREE.Vector2()
        this.time = 0
        this.addMesh()
        this.addLights()

        this.mouseEffect()
        this.render()
        // this.settings()
    }

    initVars(){
        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    mouseEffect(){
        window.addEventListener('mousedown', (e) => {
            
        })

        window.addEventListener('mouseup', (e) => {
            
        })

        window.addEventListener('mousewheel', (e) => {
            
        })

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / this.sizes.width) * 2 - 1
            this.mouse.y = -(e.clientY / this.sizes.height) * 2 + 1
        }, false)
    }

    addMesh(){
        this.geometry = new THREE.SphereGeometry(0.9, 15, 32, 16);
        this.material = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            wireframe: true, 
            transparent: true 
        });
        
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

    addLights(){
        this.pointLight = new THREE.PointLight(0xffffff, 0.1)
        this.pointLight.position.x = 2
        this.pointLight.position.y = 3
        this.pointLight.position.z = 4
        this.scene.add(this.pointLight)
    }

    settings(){
        let that = this
        this.settings = {}
        this.gui = new dat.GUI()
    }

    render(){
        this.time++

        this.mesh.rotation.y += 0.01
        this.mesh.rotation.x += 0.005
        this.renderer.render(this.scene, this.camera)
        window.requestAnimationFrame(this.render.bind(this))
    }
}

new Animate()