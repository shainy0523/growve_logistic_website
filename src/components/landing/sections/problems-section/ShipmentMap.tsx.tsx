"use client";

import {
  MapContainer,
  Polyline,
  TileLayer,
  Marker
} from "react-leaflet";

import L, { LatLngTuple } from "leaflet";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from "recharts";

const route: LatLngTuple[] = [
  [13.0827, 80.2707], // Chennai
  [16.5062, 80.648],
  [18.5204, 73.8567],
  [19.076, 72.8777] // Mumbai
];

const yellowIcon = new L.DivIcon({
  html: `
    <div style="
      width:18px;
      height:18px;
      border-radius:50%;
      background:#F2BC36;
      border:3px solid white;
      box-shadow:0 4px 12px rgba(0,0,0,.18);
    "/>
  `,
  className: ""
});

const revenueData = [
  {
    value: 81,
    fill: "#F2BC36"
  }
];

export default function ShipmentMap() {
  return (
    <div
      style={{
        marginTop: 70,
        height: 560,
        borderRadius: 18,
        overflow: "hidden",
        background: "#efefef",
        position: "relative"
      }}
    >
      <MapContainer
        center={[16.5, 77.8]}
        zoom={5}
        zoomControl={false}
        attributionControl={false}
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Polyline
          positions={route}
          pathOptions={{
            color: "#F2BC36",
            weight: 8,
            opacity: 0.95
          }}
        />

        {route.map((point, i) => (
          <Marker
            key={i}
            position={point as any}
            icon={yellowIcon}
          />
        ))}
      </MapContainer>

      {/* Search */}

      <div
        style={{
          position: "absolute",
          top: 82,
          left: "50%",
          transform: "translateX(-50%)",
          width: 340,
          height: 48,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          zIndex: 1000
        }}
      >
        <input
          placeholder="Search by Tracking ID..."
          style={{
            border: "none",
            outline: "none",
            flex: 1
          }}
        />
      </div>

      {/* Revenue Card */}

      <div
        style={{
          position: "absolute",
          top: 40,
          right: 160,
          width: 230,
          background: "#fff",
          borderRadius: 16,
          padding: 16,
          boxShadow: "0 20px 40px rgba(0,0,0,.12)",
          zIndex: 1000
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <strong>Shipping Revenue</strong>
          <span>This Year</span>
        </div>

        <div
          style={{
            width: 180,
            height: 130,
            margin: "0 auto"
          }}
        >
          <ResponsiveContainer>
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              startAngle={180}
              endAngle={0}
              data={revenueData}
            >
              <RadialBar dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: -25
          }}
        >
          <div
            style={{
              color: "#666",
              fontSize: 12
            }}
          >
            Total Revenue
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 700
            }}
          >
            ₹2,57,230
          </div>
        </div>
      </div>

      {/* Active Shipment */}

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 180,
          width: 260,
          background: "#fff",
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 18px 40px rgba(0,0,0,.1)",
          zIndex: 1000
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "#777"
          }}
        >
          Active Shipments
        </div>

        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            marginTop: 6
          }}
        >
          1,284
        </div>

        <div
          style={{
            color: "#29b765",
            fontSize: 13
          }}
        >
          ▲ 8.7% from last week
        </div>
      </div>

      {/* Shipment Card */}

      <div
        style={{
          position: "absolute",
          bottom: 65,
          left: "50%",
          transform: "translateX(-50%)",
          width: 520,
          background: "#fff",
          borderRadius: 18,
          padding: 20,
          boxShadow: "0 20px 40px rgba(0,0,0,.12)",
          zIndex: 1000
        }}
      >
        <div
          style={{
            fontWeight: 700,
            marginBottom: 10
          }}
        >
          #TN29AR8463
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20
          }}
        >
          <span
            style={{
              background: "#FFF3D6",
              color: "#AF7C00",
              padding: "4px 10px",
              borderRadius: 999
            }}
          >
            In Transit
          </span>

          <span
            style={{
              color: "#999"
            }}
          >
            On Time
          </span>
        </div>

        <div
          style={{
            position: "relative",
            height: 20,
            marginBottom: 20
          }}
        >
          <div
            style={{
              height: 4,
              background: "#F2BC36",
              marginTop: 8
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#fff",
              border: "3px solid #F2BC36"
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#fff",
              border: "3px solid #F2BC36"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>
            <strong>Chennai, TN, IND</strong>
            <div>May 12, 2026</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <strong>Mumbai, MH, IND</strong>
            <div>May 15, 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}