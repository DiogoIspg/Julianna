import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
const OrbitControls = require('three-orbitcontrols')
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-costumize',
  templateUrl: './costumize.component.html',
  styleUrls: ['./costumize.component.css']
})
export class CostumizeComponent implements OnInit {

  myForm: FormGroup;
  gemColor: string = 'gold';
  sphere: any;
  renderer: any;
  scene: any;
  camera: any;

  constructor(private formBuilder: FormBuilder,) {
    this.animate = this.animate.bind(this)

    this.myForm = this.formBuilder.group({
      type: 'Ring',
      gem: 'Gold',
      price: '200€'
    });
  
    this.onChanges();
  }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(val => {
      console.log(val);
      if(val.gem === 'Saphire') {
        this.gemColor = 'lightblue';
      } else if(val.gem === 'Ruby') {
        this.gemColor = 'red';
      }  else if(val.gem === 'Emerald') {
        this.gemColor = 'lightgreen';
      } else {
        this.gemColor = 'gold';
      }
    });
  }

  ngOnInit(): void {
    this.scene = new THREE.Scene();
    let elm = document.getElementById("render");

    this.camera = new THREE.PerspectiveCamera( 75, elm.offsetWidth/ elm.offsetHeight, 0.1, 1000 );
    
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( elm.offsetWidth, elm.offsetHeight * 2 );
    elm.appendChild( this.renderer.domElement );
    
    let geometry = new THREE.TorusGeometry(10, 1, 4, 50)
    let material = new THREE.MeshBasicMaterial( { color: '#fbe8c4' } );
    let cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );
    
    const gemGeometry = new THREE.SphereGeometry( 1.5, 4, 4 );
    const gemMaterial = new THREE.MeshBasicMaterial( {color: 'gold'} );
    this.sphere = new THREE.Mesh( gemGeometry, gemMaterial );
    this.sphere.position.y = 11;
    this.scene.add( this.sphere )

    let controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.addMaterials(this.scene)

    this.camera.position.z = 30;
    
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.sphere.material.color.setColorName(this.gemColor);
    this.renderer.render( this.scene, this.camera );
  };

  addMaterials(scene) {
    const gemTopGeometry = new THREE.SphereGeometry( 0.5, 4, 4 );
    const gemTopMaterial = new THREE.MeshBasicMaterial( {color: 'white'} );
    const gemTopSphere = new THREE.Mesh( gemTopGeometry, gemTopMaterial );
    gemTopSphere.position.y = 12.1;
    scene.add( gemTopSphere )
    
    // const d1 = new THREE.SphereGeometry( 0.5, 4, 4 );
    // const d1MB = new THREE.MeshBasicMaterial( {color: 'white'} );
    // const d1M = new THREE.Mesh( d1, d1MB );
    // d1M.position.y = 12.2;
    // scene.add( d1M )
  }

}
