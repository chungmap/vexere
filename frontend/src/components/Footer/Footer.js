import React from "react";
import "../../Sass/css/Footer.css";
export default function Footer() {
	return (
		<>
			<footer>
				<div className="footer_content">
					<div className="footer_top grid grid-cols-3 gap-6">
						<div className="footer_news">
							<div className="footer_title">Tin tức</div>
							<div className="footer_list">
								<a href="#">Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách</a>
								<a href="#">Xe giường nằm Limousine – tổng hợp chất lượng cao</a>
								<a href="#">Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao</a>
								<a href="#">Review xe limousine đi Đà Lạt: những câu hỏi thường gặp</a>
								<a href="#">Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao</a>
							</div>
						</div>
						<div className="footer_stations">
							<div className="footer_title">Tuyến đường</div>
							<div className="footer_list">
								<a href="#">Xe đi Buôn Mê Thuột từ Sài Gòn</a>
								<a href="#"> Xe đi Buôn Mê Thuột từ Sài Gòn</a>
								<a href="#">Xe đi Buôn Mê Thuột từ Sài Gòn</a>
								<a href="#">Xe đi Buôn Mê Thuột từ Sài Gòn</a>
								<a href="#">Xe đi Buôn Mê Thuột từ Sài Gòn</a>
							</div>
						</div>
						<div className="footer_limousine">
							<div className="footer_title">Xe Limousine</div>
							<div className="footer_list">
								<a href="#">Xe Limousine đi Đà Lạt từ Sài Gòn</a>
								<a href="#">Xe Limousine đi Đà Lạt từ Sài Gòn</a>
								<a href="#">Xe Limousine đi Đà Lạt từ Sài Gòn</a>
								<a href="#">Xe Limousine đi Đà Lạt từ Sài Gòn</a>
								<a href="#">Xe Limousine đi Đà Lạt từ Sài Gòn</a>
							</div>
						</div>
					</div>
					<hr />
					<div className="footer_main grid grid-cols-4 gap-6">
						<div className="footer_about">
							<div className="footer_title">Về chúng tôi</div>
							<div className="footer_list">
								<a href="#">Phần mềm nhà xe</a>
								<a href="#"> Phần mềm đại lý</a>
								<a href="#">Giới thiệu</a>
								<a href="#">Tuyển dụng</a>
								<a href="#">Liên hệ</a>
							</div>
						</div>
						<div className="footer_sup">
							<div className="footer_title">Hỗ trợ</div>
							<div className="footer_list">
								<a href="#">Hướng dẫn thanh toán</a>
								<a href="#">Quy chế VeXeRe.com</a>
								<a href="#">Bảo mật thông tin</a>
								<a href="#">Bảo mật thanh toán</a>
								<a href="#">Câu hỏi?</a>
							</div>
						</div>
						<div className="footer_award">
							<div className="footer_title">Chứng nhận</div>
							<div className="footer_list">
								<a href="#">
									<img className=" lazyloaded" alt="Vexere - Certificate" data-src="https://storage.googleapis.com/fe-production/images/Home/certificate0.png" width={121} height={46} src="https://storage.googleapis.com/fe-production/images/Home/certificate0.png" />
								</a>
								<a href="#">
									<img className=" lazyloaded" alt="Vexere - Certificate" data-src="https://storage.googleapis.com/fe-production/images/Home/certificate1.png" width={121} height={46} src="https://storage.googleapis.com/fe-production/images/Home/certificate1.png" />
								</a>
								<a href="#">
									<img className=" lazyloaded" alt="Vexere - Certificate" data-src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png" width={151} height={56} src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png" />
								</a>
								<a href="#">
									<img className=" ls-is-cached lazyloaded" alt="Vexere - Certificate" data-src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png" width={151} height={56} src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png" />
								</a>
							</div>
						</div>
						<div className="footer_download">
							<div className="footer_title">Tải ứng dụng đặt vé</div>
							<div className="footer_list">
								<a href="#">
									<img className="FooterMenu__DownloadLogo-sc-13w4bwi-1 ewtgXx lazyloaded" alt="download-logo-1" data-src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/AP-icon.png?v=2" width={150} height={49} src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/AP-icon.png?v=2" />
								</a>
								<a href="#">
									<img className="FooterMenu__DownloadLogo-sc-13w4bwi-1 ewtgXx lazyloaded" alt="download-logo-2" data-src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/GP-icon.png?v=2" width={150} height={49} src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/GP-icon.png?v=2" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
		</>
	);
}
