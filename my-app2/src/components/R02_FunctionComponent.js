import React, { useState } from 'react';

// 함수형 컴포넌트는 Component 상속이 필요없다!

// 함수형 컴포넌트
// 1. 함수 생성하기
// 2. return 구문에 출력하고자 하는 html 코드 작성
// 3. 만든 함수를 export default 지정하기

const FunctionEx = () => {

	// 컴포 넌트 상태에 count추가, 초기값은 100
	// 값 변환시 setCount 함수 사용할꺼다
	const [count, setCount] = useState(100);


	const cilckHander = () => {
		setCount(() => count - 1);
	}

	return(
		<>
			<h2>함수형 컴포넌트 입니다~</h2>
			<h1>count : {count}</h1>
			<button onClick={cilckHander}>감소</button>

		</>
	);
}

export default FunctionEx;