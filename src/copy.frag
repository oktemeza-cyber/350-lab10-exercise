#version 120 

uniform sampler2D toCopy;
uniform vec2 windowSizePixels;

void main() {
    // TODO (reprojection)
    vec2 uv = gl_FragCoord.xy / windowSizePixels;
    gl_FragColor = texture2D(toCopy, uv);
}
