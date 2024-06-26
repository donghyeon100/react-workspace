import React, { Component } from 'react'
// -> node_modules 폴더에서 'react' 관련 라이브러리를 얻어와 해당 페이지에서 사용할건데
// 사용 시 이름을 React, Component라고 지정하겠다라는 의미 

// 클래스형 컴포넌트 만들기
// 1. Component 상속 받기
// 2. render() 함수 작성하기(필수)
// 3. 만든 class를 export default 지정하기
class ComponentEx extends Component {

	// 생성자 함수 : 컴포넌트 생성 시 실행
	constructor(props) {
		super(props);

		this.state = { count: 0 };
	}

	// 이벤트 : 행동, 동작(click, keyup, mouseover, ...)
	// 이벤트 리스너 : 이벤트 감지 (onclick, onkeyup)
	// 이벤트 핸들러 : 이벤트 감지 시 수행할 함수(기능)

	/* 이벤트 핸들러 작성 */
	clickHandler = () => {
		this.setState({ count: this.state.count + 1 });
	}

	// render()함수 : 
  // return 되는 html형식의 코드(jsx, js + xml)를 화면에 출력하는 함수
  // 화면이 변경되어야 할 시점에 자동으로 호출됨.
  // ** Component를 상속 받은 하위 클래스에 반드시 있어야 하는 함수**
  render(){
    return(
      <>
        <h2>클래스형 컴포넌트 입니다~</h2>

        <h1 id="count">count : {this.state.count}</h1>
        <button onClick={this.clickHandler}>증가</button>
      </>
    );
  }

}

// 해당 컴포너트 호출 시 내보낼 기본 함수를 지정
export default ComponentEx;