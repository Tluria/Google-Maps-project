import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  protected map: any;
  lat: number = 51.678418;
  lng: number = 7.809007;
  latInput: number;
  lngInput: number;
  locations = [];
  locationChosen = false;

  public mapReady(map) {
    this.map = map;
  }

  constructor() { }

  ngOnInit() {
  }

  onAddLocation() {
    this.locationChosen = true;
    this.lat = this.latInput;
    this.lng = this.lngInput;
    this.locations.push({
      lat: this.latInput,
      lng: this.lngInput
    })
  }

  onDelete(index: number) {
    this.locationChosen = false;
    this.locations.splice(index,1);
  }

  changeLocation(index: number) {
    this.lat = this.locations[index].lat;
    this.lng = this.locations[index].lng;
    this.map.setCenter({ lat: this.lat, lng: this.lng });
  }
}
