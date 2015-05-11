<?php 

if($_POST['email']){
	echo $_POST['email'];
	echo $_POST['senha'];
}



?>

<div id="content-teste">

	
	
<div class="panel">
              <div class="panel-heading">
                <span class="panel-title">Preferências de Data/Hora</span>
              </div>
              <div class="panel-body">
                <form class="form-vertical" role="form" action="clock.php" id="teste" onsubmit="event.preventDefault(); return submitForm('teste', 'clock.php')">
             
                  <div class="col-md-10 ph30">
                    
                    <div class="form-group">
                      <div class="bs-component">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="fa fa-envelope-o"></i>
                          </span>
                          <input class="form-control" placeholder="Email address" name="email" id="email" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="bs-component">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="fa fa-key"></i>
                          </span>
                          <input class="form-control" placeholder="Password" type="password" name="senha" id="senha">
                        </div>
                      </div>
                    </div>
                    
                    
                    <button type="submit" class="btn btn-primary">Enviar</button>


                  </div>

                </form>
              </div>
            </div>
</div>