import styles from '../../styles/Login.module.css'

const Login = () => {
    <>
        <div className={styles.container}>
            <main className={styles.flexContainer}>
                <div className={styles.flexLeft}>
                    <div>
                        Student<br></br> App.
                    </div>
                </div>
                <div className={styles.flexRight}>
                    <div className={styles.card}>
                        {/* {msg ?
                            <div className="text-center alert alert-danger" role="alert">
                                <strong>{msg}</strong>
                            </div>
                            : null} */}
                        <p className={styles.head}>Masuk</p>
                        <div className={styles.input}>
                            <form>
                                <div className="mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Contoh: johndee@gmail.com"
                                        name="email"
                                    // onChange={formik.handleChange}
                                    // value={formik.values.email}
                                    />
                                    {/* {formik.touched.email && formik.errors.email ? (
                                        <div className="text-danger">{formik.errors.email}</div>
                                    ) : null} */}

                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Masukkan Password"
                                        name="password"
                                    // onChange={formik.handleChange}
                                    // value={formik.values.password}
                                    />
                                    {/* {formik.touched.password && formik.errors.password ? (
                                        <div className="text-danger">{formik.errors.password}</div>
                                    ) : null} */}
                                </div>
                                <p className={styles.forget}>
                                    <a href="forget-password">Lupa password?</a>
                                </p>
                                {/* {onLoading ? <LoadingAnimation /> :
                                    <button type="submit" className={styles.button}>
                                        Masuk
                                    </button>
                                } */}
                            </form>
                        </div>
                        <div className={styles.line2}>
                            {/* <hr></hr> */}
                        </div>
                        <p className={styles.footer}>
                            Belum punya akun? <a href="register">Daftar disini</a>
                        </p>
                    </div>
                </div>
            </main>
        </div>

    </>
}

export default Login