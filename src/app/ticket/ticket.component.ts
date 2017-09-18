import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.toggle-tickets').click(function() {
  let $tickets = $(this).parent().siblings('.collapse');
 
  if ($(this).closest('.ticket-card').hasClass('active')) {
    $tickets.slideToggle();
    $(this).html('Show Tickets');
    $(this).closest('.ticket-card').removeClass('active');
  } else {
    $tickets.slideToggle();
    $(this).html('Hide Tickets');
    $(this).closest('.ticket-card').addClass('active');
  }
});
  }


}
