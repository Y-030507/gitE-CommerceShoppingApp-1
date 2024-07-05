
<html lang="en" xmlns:th="http://www.thymeleaf.org"
	th:replace="~{base::layout(~{::section})}">
<head>
<meta charset="ISO-8859-1"/>
<title>Insert title here</title>
</head>
<body>
	<section>
		<div class="container p-5 mt-3">
			<div class="row">
				<div class="col-md-6 offset-md-3">
					<div class="card card-sh">
						<div class="card-header text-center fs-4">Add Product</div>
						<div class="card-body">
							<form>
								<div class="mb-3">
									<label>Enter Title</label> 
								</div>

								<div class="mb-3">
									<label>Enter Description</label>
									<textarea rows="3" cols="" class="form-control"></textarea>
								</div>

								<div class="mb-3">
									<label>Category</label> <select class="form-control">
										<option>--select--</option>
										<option>Electronics</option>
									</select>
								</div>

								<div class="mb-3">
									<label>Enter Price</label> 
								</div>
								<div class="row">

									<div class="mb-3 col">
										<label>Enter Stock</label> 
									</div>

									<div class="mb-3 col">
										<label>Upload Image</label> 
									</div>
								</div>
								<button class="btn btn-primary col-md-12">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</body>
</html>