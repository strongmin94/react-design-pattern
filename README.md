React design pattern

1. Presentation Component - Container Component

- React에서 가장 유명하고 가장 기본적인 디자인 패턴이다.
- 데이터의 처리와 출력을 분리한다 (기능과 UI를 분리).
- Container Component : 데이터를 처리하는 역할을 담당한다.
- Presentation Component: 데이트를 출력하는 역할을 담당한다.

2. Component - Custom hooks

- 기존 Presentation Component - Container Component 패턴에서 로직을 hooks로 따로 관리하는 디자인 패턴이다.
- hooks로 로직을 관리하게 되면서 UI재사용을 넘어 로직까지 재사용 가능하게 된다.

3. Atomic 디자인 패턴

- 가장 작은 단위(원자 단위)로 쪼개고 합치며 마치 레고블럭을 쌓듯이 개발하는 디자인 패턴이다.
- 여기서 원자단위는 가장 작은 단위의 컴포넌트를 말한다. (ex. Input, Button, Checkbox, Select 등...)

제가 제작한 React 프로젝트는 기본적으로 위의 세 가지 디자인 패턴을 사용하여 개발을 진행합니다.
우선 Component는 제작에 있어서 재사용에 용이하고 딱 하나의 기능만을 실행하는 방향으로 제작합니다.
Atomic 패턴의 원칙에 맞춰 최대한 작은 단위로 개발하려는 의도입니다.
또, 데이터를 받아 단순 렌더링만 처리해주는 Presenter와 그 데이터들을 관리할 Container의 개념으로 나누어
Presentation Component - Container Component 패턴을 사용하여 개발합니다.
현재는 많이들 안 쓰는 개념이지만 기능과 UI를 분리한다는 관점에서 유용하게 사용하고 있습니다.
여기서 UI만 분리하여 사용하는 게 아쉬워서 로직 또한 따로 Custom hooks로 따로 분리하여 사용하고 있습니다.
이렇게 사용하면 UI뿐만 아니라 로직 또한 관리에 용이하며 중복되는 로직을 재사용할 수 있으므로 유용하게 사용하고 있습니다.
결과적으로 (Presentation Component - Container Component) - Custom hooks 패턴으로 개발을 진행하고 있습니다.

4. 사용중인 (Presentation Component - Container Component) - Custom hooks 패턴 예시

- src/modules/main
- src/modules/signin

5. 사용중인 Atomic 패턴 예시

- src/components/\*
