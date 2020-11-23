try {
    // 예외를 발생시킵니다.
    console.log("여기는 실행해야할 명령들이 있는 곳입니다.")
    console.log("명령을 실행하다가 에러가 발생하면 catch로 갑니다.")
    //error.error.error();
    throw "내가 만든 에러를 catch가 받습니다."
//    const error = new Error("메시지");
//    error.name = "내가 만든 에러"
//    error.message = "에러에 대한 메시지도 지정할 수 있습니다."
//    throw error;
} catch (e) {
    console.log("에러가 발생하면 실행되는 곳")
    console.log(e.name);
    console.log(e.message);
} finally {
    console.log("에러 처리 끝났습니다. 이 문장은 무조건 실행됩니다.")
}