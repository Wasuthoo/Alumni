import Head from 'next/head'

const Record = () => {
  return (
    <>
      <Head>
        <title>Alumni | Record</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1>ประวัติศิษย์เก่า</h1>
        <p>ชื่อ</p>
        <p>นามสกุล</p>
        <p>รหัสนักศึกษา!</p>
        <p>ภูมิภาค</p>
      </div>
    </>
  );
}
 
export default Record;