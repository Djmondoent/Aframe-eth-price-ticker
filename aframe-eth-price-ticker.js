
  AFRAME.registerComponent('mirror-renderer', {
    schema: {
      target: { type: 'selector' }
    },

    init: function() {
      const sceneEl = this.el.sceneEl;
      const target = this.data.target;
      const renderer = sceneEl.renderer;

      this.renderTarget = new THREE.WebGLRenderTarget(1024, 1024);
      this.oldTarget = renderer.getRenderTarget();
      this.camera = new THREE.PerspectiveCamera();

      target.object3D.add(this.camera);
    },

    tick: function() {
      const renderer = this.el.sceneEl.renderer;

      renderer.setRenderTarget(this.renderTarget);
      renderer.render(this.el.sceneEl.object3D, this.camera);
      renderer.setRenderTarget(this.oldTarget);
    },

    remove: function() {
      this.camera.parent.remove(this.camera);
      this.renderTarget.dispose();
    }
  });

