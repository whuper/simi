<!--<h2><?php echo $title; ?></h2>-->

<ul class="list">
<?php foreach ($items as $item): ?>
<li>
    <h3><?php echo $item['title']; ?></h3>
   
		<p>

		<img style="min-width:800px;min-height:450px;" src="<?php echo '/statics/tokyohot/posters/within_'.( intval( ($item['id']-1)/500 ) + 1) * 500 .'/'.$item['designation'].'.jpg'; ?>" /> <br> 

 <?php echo $item['text']; ?>
		</p>
       
  
	<p>

<a href="<?php echo site_url('porns/view/'.$item['id']); ?>"><span> <?php echo $item['designation'] ?> </span> </a>
</p>
<div class="infowrapper">
<?php echo $item['actorInfo'] ?>
</div>
</li>
<?php endforeach; ?>
</ul>

<?php echo $this->pagination->create_links(); ?>
