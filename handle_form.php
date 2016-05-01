<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<h1>a</h1>
		<p>
		<?php 
		echo var_dump($_POST); ?></p>
			<?php 
				echo $_POST["select_region"] . " " . $_POST["summoner_name"];
			?>
		
	</body>	
</html>