type Componente = {
  new(...args: any[]): {
    render(): any
  }
}

export default function logRender<C extends Componente>(component: C) {
  return class extends component {
    render() {
      console.log('Rendering component');
      const r: any = super.render()

      console.log('Rendering completed');
      return r
    }
  }
}