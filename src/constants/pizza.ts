
type PizzaBrand = 'domino' | 'pizzaschool';
interface PizzaProps {
  name: string;
  size: 'standalone' | 'small' | 'medium' | 'large';
  width: number;
  shape: 'circle',
  color: string;
}

const pizza: { [name: string]: PizzaProps[]}  = {
  domino: [{
    name: 'Domino Large',
    size: 'large',
    width: 1.3,
    shape: 'circle',
    color: 'rgba(255,0,0,0.1)',
  }, {
    name: 'Domino Medium',
    size: 'medium',
    width: 1.0,
    shape: 'circle',
    color: 'rgba(255,0,0,0.1)',
  }, {
    name: 'Domino Small Test',
    size: 'small',
    width: 0.8,
    shape: 'circle',
    color: 'rgba(255,0,0,0.1)',
  }]
}

export { pizza };