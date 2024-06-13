varying vec2 vUv;
uniform float time;
void main() {
    float noise = fract(sin(dot(vUv.xy, vec2(12.9898, 78.233))) * 43758.5453 + time);
    gl_FragColor = vec4(vec3(noise), 1.0);
}