<h2><?php echo $title; ?></h2>

<?php foreach ($list as $item): ?>

    <h3><?php echo $item['username']; ?></h3>
    <div class="main">
        <?php echo $item['phone']; ?>
    </div>
    <p><a href="<?php echo site_url('news/'.$item['id']); ?>">View item</a></p>

<?php endforeach; ?>
