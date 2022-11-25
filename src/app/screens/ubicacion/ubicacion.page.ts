import { Component, OnInit } from '@angular/core';





// eslint-disable-next-line no-var
declare var google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 25.67507,
        lng: -100.31847,
      },
      title: 'Tienda Centro de Monterrey'
    },
    {
      position: {
        lat: 25.7963944,
        lng: -100.251758,
      },
      title: 'Tienda Apodaca'
    },
    {
      position: {
        lat: 25.734749,
        lng: -100.310606,
      },
      title: 'Tienda San Nicolas'
    },
    {
      position: {
        lat: 25.667418,
        lng: -100.222952,
      },
      title: 'Tienda Guadalupe'
    },
  ];


  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 25.67507, lng: -100.31847};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}
