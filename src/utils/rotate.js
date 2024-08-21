export default function rotate([x, y, z], angle) {
  return [
    x * Math.cos(angle) - z * Math.sin(angle),
    y,
    x * Math.sin(angle) + z * Math.cos(angle),
  ]
}
